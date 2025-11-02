import React from 'react';

const AIMLProcessingSection = () => {
  return (
    <section id="ai-ml-automated-processing" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 12: Artificial Intelligence and Machine Learning Processing
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        12.1 AI-Powered Services and Automated Decision-Making
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        We deploy advanced artificial intelligence (AI), machine learning (ML), deep learning, neural networks, and automated decision-making systems to provide, enhance, and secure our Services. This section provides comprehensive transparency about our AI/ML practices in accordance with GDPR Article 22, California's Automated Decision-Making Technology (ADMT) Accountability Act, the EU AI Act, and other emerging AI governance frameworks.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Types of AI/ML Systems Deployed
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We utilize the following categories of AI/ML systems:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Fraud Detection Models:</strong> Supervised and unsupervised machine learning models analyzing transaction patterns, user behavior, device fingerprints, and network analysis to detect fraudulent activities, account takeover attempts, and financial crimes in real-time.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Risk Scoring Systems:</strong> Ensemble models combining gradient boosting, random forests, and neural networks to assess credit risk, transaction risk, merchant risk, and compliance risk with confidence scores and explainability features.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Natural Language Processing (NLP):</strong> Large language models (LLMs) and transformer-based architectures for customer support automation, sentiment analysis, contract analysis, policy interpretation, and multilingual communication.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Computer Vision Systems:</strong> Convolutional neural networks (CNNs) for identity document verification, facial recognition, liveness detection, object detection, and optical character recognition (OCR).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Recommendation Engines:</strong> Collaborative filtering and content-based recommendation systems suggesting payment methods, financial products, and service features personalized to user preferences and behavior.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Predictive Analytics:</strong> Time-series forecasting models predicting transaction volumes, fraud trends, customer churn, revenue forecasting, and resource allocation optimization.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Anomaly Detection:</strong> Unsupervised learning algorithms including isolation forests, autoencoders, and one-class SVMs detecting unusual patterns indicating fraud, security threats, or system failures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Reinforcement Learning Systems:</strong> RL agents optimizing dynamic pricing, fraud prevention strategies, customer engagement timing, and operational efficiency.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Generative AI:</strong> Generative adversarial networks (GANs), variational autoencoders (VAEs), and foundation models for synthetic data generation, data augmentation, and testing purposes (never for creating misleading content).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Autonomous Decision Systems:</strong> Automated systems making decisions about transaction approvals, account suspensions, verification requirements, and risk categorizations with varying degrees of human oversight.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Automated Decision-Making with Legal or Similarly Significant Effects
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We employ automated decision-making systems that may produce legal or similarly significant effects. You have the right to:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Human Review:</strong> Request human review of automated decisions affecting you, including account suspensions, transaction declinations, application denials, and risk categorizations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Explanation:</strong> Receive meaningful information about the logic involved in automated decision-making, including key factors influencing the decision and their relative importance.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Contest:</strong> Challenge automated decisions and provide additional context or evidence for reconsideration.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Opt-Out:</strong> Where legally required, opt out of certain automated decision-making processes in favor of human decision-making.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. AI Model Training and Personal Data Usage
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We use Personal Data for AI/ML model training and improvement under the following conditions:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Minimization:</strong> We collect and use only the minimum Personal Data necessary for model training, employing privacy-preserving techniques including federated learning, differential privacy, and data anonymization.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Synthetic Data:</strong> Where possible, we generate synthetic data using GANs and other generative models that preserve statistical properties without containing actual Personal Data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Federated Learning:</strong> Models trained across decentralized devices without centralizing Personal Data, keeping raw data on-device while only sharing encrypted model updates.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Differential Privacy:</strong> Mathematical guarantees added to training data and model outputs ensuring individual records cannot be identified or reconstructed from model behavior.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Homomorphic Encryption:</strong> Training models on encrypted data without decryption, enabling computation on encrypted Personal Data while maintaining privacy.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Secure Multi-Party Computation:</strong> Collaborative model training across organizations without sharing underlying Personal Data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Compartmentalization:</strong> Training data segregated into isolated environments with strict access controls and encryption, separate from production systems.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Opt-Out:</strong> You may opt out of having your Personal Data used for AI model training, subject to legitimate business and security needs.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. AI Bias Mitigation and Fairness
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We implement comprehensive bias detection and mitigation strategies:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Fairness Audits:</strong> Regular algorithmic audits assessing disparate impact across protected characteristics including race, ethnicity, gender, age, disability status, religion, national origin, and other protected classes under applicable anti-discrimination laws.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Fairness Metrics:</strong> Quantitative assessment using metrics including demographic parity, equalized odds, equal opportunity, calibration, and individual fairness measures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Bias Correction:</strong> Implementation of pre-processing (data reweighting, resampling), in-processing (fairness constraints, adversarial debiasing), and post-processing (threshold optimization) techniques.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Diverse Training Data:</strong> Curation of representative training datasets reflecting diverse populations and edge cases, with oversampling of underrepresented groups.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Protected Attribute Handling:</strong> Careful handling of protected attributes, ensuring they are not used as direct features while monitoring for proxy variables that correlate with protected classes.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Intersectionality Analysis:</strong> Evaluation of model performance across intersectional groups (e.g., race × gender × age) to identify compound bias effects.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Third-Party Audits:</strong> Engagement of independent fairness auditors and civil rights organizations to review AI systems for bias and discrimination.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Continuous Monitoring:</strong> Real-time monitoring of model predictions in production for fairness drift and emergent biases.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Explainable AI (XAI) and Transparency
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We prioritize AI explainability and transparency through:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Model Interpretability:</strong> Use of inherently interpretable models (decision trees, linear models, rule-based systems) where high-stakes decisions are made.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">SHAP Values:</strong> SHapley Additive exPlanations providing consistent, locally accurate feature importance explanations for individual predictions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">LIME:</strong> Local Interpretable Model-agnostic Explanations generating human-understandable explanations for black-box model predictions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Counterfactual Explanations:</strong> Providing "what-if" scenarios showing how changes to inputs would alter model predictions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Feature Importance Rankings:</strong> Clear disclosure of which data features most influence model decisions, with relative importance scores.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Decision Pathways:</strong> Visual representations of decision logic paths through ensemble models and neural networks.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Confidence Scores:</strong> Transparent display of model confidence levels, with higher scrutiny applied to low-confidence predictions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Model Cards:</strong> Comprehensive model documentation including intended use, training data characteristics, performance metrics, limitations, and fairness evaluations.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. AI Safety and Security Measures
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We implement rigorous AI safety and security controls:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Adversarial Robustness:</strong> Testing models against adversarial attacks including evasion attacks, poisoning attacks, model inversion, and membership inference attacks.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Input Validation:</strong> Rigorous validation and sanitization of inputs to prevent prompt injection, jailbreaking, and other manipulation techniques.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Output Filtering:</strong> Multi-layer filtering systems preventing generation or disclosure of harmful, illegal, or privacy-violating content.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Model Monitoring:</strong> Continuous monitoring for model drift, performance degradation, distribution shift, and anomalous behavior.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Rollback Capabilities:</strong> Ability to instantly rollback to previous model versions if safety or performance issues are detected.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Circuit Breakers:</strong> Automated kill switches stopping model deployment if safety thresholds are exceeded.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Red Team Testing:</strong> Regular adversarial testing by internal and external security researchers attempting to break AI systems.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Model Governance:</strong> Formal review boards assessing AI system deployments for safety, fairness, and compliance before production release.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Third-Party AI Services and Data Sharing
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We may utilize third-party AI services (such as OpenAI, Google Cloud AI, Amazon AWS AI, Microsoft Azure AI) subject to strict data protection requirements:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Processing Agreements:</strong> All third-party AI providers are bound by comprehensive DPAs ensuring GDPR compliance, data confidentiality, and limited data retention.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">No Training on Customer Data:</strong> Contractual prohibitions preventing third-party AI providers from using your Personal Data to train their general-purpose models.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Minimization:</strong> Only minimum necessary data shared with third-party AI services, with pre-processing to remove or pseudonymize identifiers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Vendor Assessment:</strong> Rigorous security and privacy assessments of third-party AI providers including audits, certifications, and contractual safeguards.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Localization:</strong> Use of region-specific AI services to maintain data within required geographic boundaries.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Audit Rights:</strong> Reserved rights to audit third-party AI providers' data practices and security controls.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. AI-Generated Content Disclosure
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When AI systems generate content that you interact with, we provide clear disclosure:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Customer support responses generated or assisted by AI are clearly labeled as such</li>
        <li>AI-generated summaries, recommendations, or insights are marked to distinguish from human-created content</li>
        <li>Synthetic or AI-augmented images, videos, or audio are watermarked and disclosed</li>
        <li>Chatbot and virtual assistant interactions clearly identify the AI nature of the interaction</li>
        <li>You may request escalation to human support agents at any time during AI interactions</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. Emerging AI Technologies and Future-Proofing
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We monitor and prepare for emerging AI technologies:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Artificial General Intelligence (AGI):</strong> Monitoring developments in AGI with commitment to responsible deployment practices and enhanced safety protocols if AGI capabilities emerge.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Machine Learning:</strong> Preparing for quantum-enhanced ML algorithms with quantum-resistant security measures (see Quantum Computing section).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Neuromorphic Computing:</strong> Evaluating brain-inspired computing architectures with enhanced privacy and security considerations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Edge AI:</strong> Deploying on-device AI processing to enhance privacy by minimizing data transmission to cloud servers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">AI Regulation Compliance:</strong> Proactive compliance with emerging AI regulations including EU AI Act, proposed US federal AI legislation, and sector-specific AI governance frameworks.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. Your AI-Related Rights and Choices
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        You have specific rights regarding AI processing of your Personal Data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Know:</strong> Request information about what AI systems process your data, for what purposes, and with what automated decision-making logic.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Meaningful Explanation:</strong> Receive human-understandable explanations of automated decisions affecting you.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Human Review:</strong> Request that automated decisions be reviewed and overridden by human decision-makers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Object:</strong> Object to AI processing of your Personal Data for specific purposes, including profiling and automated decision-making.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Opt-Out of Training:</strong> Opt out of having your Personal Data used to train or improve AI models, subject to legitimate business needs.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Correction:</strong> Correct inaccurate Personal Data used by AI systems, triggering model retraining or recalibration if necessary.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Deletion:</strong> Request deletion of Personal Data from AI training datasets and model parameters where technically feasible.
        </li>
      </ul>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        To exercise your AI-related rights or ask questions about our AI practices, contact our AI Ethics and Governance team at <a href="mailto:ai-ethics@company.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">ai-ethics@company.com</a> or submit a request through our <a href="/ai-transparency-center" className="text-[#635bff] hover:text-[#0a2540] hover:underline">AI Transparency Center</a>.
      </p>
    </section>
  );
};

export default AIMLProcessingSection;
