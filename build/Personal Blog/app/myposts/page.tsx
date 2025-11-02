import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { PenSquare, Trash2, Edit, Eye, Loader2, FileText } from "lucide-react";
import { format } from "date-fns";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function MyPosts() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const queryClient = useQueryClient();


  useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {
      router.push(createPageUrl("home"));
    });
  }, []);


  const { data: posts, isLoading } = useQuery({
    queryKey: ['myPosts', user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const allPosts = await blogAPI.entities.BlogPost.list("-created_date");
      return allPosts.filter(post => post.created_by === user.email);
    },
    enabled: !!user?.email,
  });


  const deleteMutation = useMutation({
    mutationFn: (id) => blogAPI.entities.BlogPost.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myPosts'] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      setDeleteId(null);
    },
  });


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-sans">Loading...</p>
        </div>
      </div>
    );
  }


  const publishedPosts = posts?.filter(p => p.published_date) || [];
  const draftPosts = posts?.filter(p => !p.published_date) || [];


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>
              My Posts
            </h1>
            <p className="text-gray-600 font-sans">
              {posts?.length || 0} total {posts?.length === 1 ? 'post' : 'posts'}
            </p>
          </div>
          <Link href={createPageUrl("write")}>
            <Button
              className="bg-gray-900 hover:bg-gray-800 font-sans uppercase tracking-wider rounded-none"
            >
              <PenSquare className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>


        {isLoading ? (
          <div className="space-y-6">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : posts?.length === 0 ? (
          <div className="bg-white border border-gray-200 p-16 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>
              No posts yet
            </h3>
            <p className="text-gray-600 mb-6 font-sans">
              Start writing your first article
            </p>
            <Link href={createPageUrl("write")}>
              <Button
                className="bg-gray-900 hover:bg-gray-800 font-sans uppercase tracking-wider rounded-none"
              >
                <PenSquare className="w-4 h-4 mr-2" />
                Write Your First Post
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Drafts */}
            {draftPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-serif font-bold mb-6 pb-3 border-b border-gray-300">
                  Drafts ({draftPosts.length})
                </h2>
                <div className="space-y-6">
                  {draftPosts.map(post => (
                    <div key={post.id} className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-sans uppercase tracking-wider">
                              Draft
                            </span>
                            <span className="text-xs uppercase tracking-wider text-gray-500 font-sans">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-serif font-bold mb-2 truncate" style={{fontFamily: 'Georgia, serif'}}>
                            {post.title || "Untitled"}
                          </h3>
                          <p className="text-gray-600 mb-4 font-serif line-clamp-2">
                            {post.excerpt || "No excerpt provided"}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 font-sans">
                            <span>Last edited {format(new Date(post.updated_date), "MMM d, yyyy 'at' h:mm a")}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Link href={createPageUrl("write") + `?edit=${post.id}`}>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-none"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setDeleteId(post.id)}
                            className="rounded-none hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* Published */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 pb-3 border-b border-gray-300">
                Published ({publishedPosts.length})
              </h2>
              {publishedPosts.length > 0 ? (
                <div className="space-y-6">
                  {publishedPosts.map(post => (
                    <div key={post.id} className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-sans uppercase tracking-wider">
                              Published
                            </span>
                            <span className="text-xs uppercase tracking-wider text-gray-500 font-sans">
                              {post.category}
                            </span>
                            {post.is_featured && (
                              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-sans uppercase tracking-wider">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-serif font-bold mb-2 truncate" style={{fontFamily: 'Georgia, serif'}}>
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 font-serif line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 font-sans">
                            <span>Published {format(new Date(post.published_date), "MMM d, yyyy")}</span>
                            <span>•</span>
                            <span>{post.read_time} min read</span>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Link href={createPageUrl("post") + `?id=${post.id}`}>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-none"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={createPageUrl("write") + `?edit=${post.id}`}>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-none"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setDeleteId(post.id)}
                            className="rounded-none hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white border border-gray-200">
                  <p className="text-gray-500 mb-4 font-serif">No published posts yet.</p>
                  <p className="text-sm text-gray-400 font-sans">
                    {draftPosts.length > 0 ? 'Finish your drafts and publish them!' : 'Start writing your first article!'}
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </div>


      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Delete Post
            </AlertDialogTitle>
            <AlertDialogDescription className="font-sans">
              Are you sure you want to delete this post? This action cannot be undone and the post will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-sans">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              className="bg-red-600 hover:bg-red-700 font-sans"
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
