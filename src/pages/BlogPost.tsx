import React, { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { getBlogPost, getRelatedPosts, BlogPost } from "../utils/blog-data";
import { scrollToSignup } from "../utils/scrollToSignup";

interface BlogPostPageProps {
  slug?: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Get slug from URL if not provided as prop
    const pathSlug = slug || window.location.pathname.split('/blog/')[1]?.split('?')[0];
    
    if (pathSlug) {
      const foundPost = getBlogPost(pathSlug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(pathSlug, foundPost.category, 3));
      }
    }
  }, [slug]);

  const handleShare = async () => {
    if (!post) return;
    
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let inList = false;
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' = 'ul';

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 border border-gray-700">
              <code className="text-sm font-mono">{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          // Start code block
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Handle lists - flush previous list if list type changes
      const isUnorderedListItem = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const isOrderedListItem = /^\d+\./.test(line.trim());
      
      if ((isUnorderedListItem || isOrderedListItem) && !inList) {
        inList = true;
        listType = isOrderedListItem ? 'ol' : 'ul';
        listItems = [];
      }

      if (isUnorderedListItem || isOrderedListItem) {
        let itemText = line.trim();
        if (isUnorderedListItem) {
          itemText = itemText.substring(2);
        } else {
          itemText = itemText.substring(itemText.indexOf('.') + 1).trim();
        }
        listItems.push(itemText);
        return;
      } else if (inList && line.trim() === '') {
        // Empty line ends list
        if (listType === 'ul') {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-6 text-gray-700">
              {listItems.map((item, i) => (
                <li key={i} className="leading-relaxed">{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`list-${index}`} className="list-decimal list-inside space-y-2 my-6 text-gray-700">
              {listItems.map((item, i) => (
                <li key={i} className="leading-relaxed">{renderInlineMarkdown(item)}</li>
              ))}
            </ol>
          );
        }
        listItems = [];
        inList = false;
        return;
      } else if (inList) {
        // Add to current list item
        if (listItems.length > 0) {
          listItems[listItems.length - 1] += ' ' + line.trim();
        }
        return;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${index}`} className="text-4xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
            {line.substring(2)}
          </h1>
        );
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-bold text-gray-900 mt-10 mb-5 leading-tight">
            {line.substring(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
            {line.substring(4)}
          </h3>
        );
        return;
      }

      if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${index}`} className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight">
            {line.substring(5)}
          </h4>
        );
        return;
      }

      // Handle paragraphs
      if (line.trim()) {
        elements.push(
          <p key={`p-${index}`} className="mb-6 leading-relaxed text-gray-700 text-base">
            {renderInlineMarkdown(line)}
          </p>
        );
      } else {
        // Empty line - add spacing
        elements.push(<br key={`br-${index}`} />);
      }
    });

    // Flush any remaining list
    if (inList && listItems.length > 0) {
      if (listType === 'ul') {
        elements.push(
          <ul key={`list-final`} className="list-disc list-inside space-y-2 my-6 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{renderInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`list-final`} className="list-decimal list-inside space-y-2 my-6 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{renderInlineMarkdown(item)}</li>
            ))}
          </ol>
        );
      }
    }

    // Flush any remaining code block
    if (inCodeBlock && codeBlockContent.length > 0) {
      elements.push(
        <pre key={`code-final`} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 border border-gray-700">
          <code className="text-sm font-mono">{codeBlockContent.join('\n')}</code>
        </pre>
      );
    }

    return elements;
  };

  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Convert bold text **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
    // Convert italic text *text*
    text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    // Convert inline code `code`
    text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-purple-600 border border-gray-200">$1</code>');
    // Convert links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 hover:text-purple-700 hover:underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Post Not Found</h1>
          <a href="/blog" className="text-purple-600 hover:underline">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-300">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-xs">{post.authorRole}</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="border-gray-300 hover:border-purple-400 hover:text-purple-600"
            >
              <Share2 className="h-4 w-4 mr-2" />
              {copied ? 'Copied!' : 'Share'}
            </Button>
          </div>

          <Separator className="mb-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </div>

          <Separator className="my-12" />

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-600 border-2 border-purple-200">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">{post.author}</h3>
                <p className="text-sm text-gray-600 mb-2">{post.authorRole}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Passionate about using technology to democratize financial wellness 
                  and empower people to achieve their financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block group"
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-all hover:shadow-lg hover:border-purple-300">
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-purple-100 text-purple-700 border-purple-300 text-xs">
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Saving Smarter Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join SaveCash and let FinBots automate your path to financial freedom.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="font-semibold bg-white text-purple-600 hover:bg-gray-100"
            onClick={scrollToSignup}
          >
            Try SaveCash Free
          </Button>
        </div>
      </section>
    </div>
  );
}

