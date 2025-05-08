import Head from 'next/head';
import Image from 'next/image';
import { SectionTitle } from "@/components/ui/section-title";
import { ProsCard } from "@/components/pros-card";
import { ConsCard } from "@/components/cons-card";
import { CodeBlock } from "@/components/code-block";

export default function XAIBlogPost() {
  return (
    <>
      <Head>
        <title>Building an Explainable AI System for Fraud Detection | Thong Lai</title>
        <meta name="description" content="My journey building and evaluating XAI systems for credit card fraud detection using SHAP, LIME, and Anchors" />
      </Head>
      <article className="container py-12 md:py-20 max-w-4xl mx-auto">
        <div className="mb-8">
          <time className="text-gray-500">April 15, 2024</time>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Beyond the Black Box: Building Explainable AI for Fraud Detection
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            My journey creating AI systems that not only perform well but can explain their decision-making process.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="https://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/visualisation/fraud_system.png" 
                alt="Credit Card Fraud Detection System"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 italic text-center">
              Credit Card Fraud Detection System
            </p>
          </div>
          
          <h2>The Black Box Problem</h2>
          <p>
            When I first began developing deep learning models for credit card fraud detection, I quickly ran into what AI researchers call the "black box problem." Our CNN model achieved an impressive 96.5% accuracy on detecting fraudulent transactions, but when stakeholders asked the simple question "Why was this transaction flagged as fraudulent?" – we had no good answer.
          </p>
          
          <p>
            This challenge led me down the path of Explainable AI (XAI): how could we build systems that not only perform well but can also explain their decision-making process in human-understandable terms?
          </p>
          
          <h2>Why Explainability Matters in Fraud Detection</h2>
          <p>
            In sensitive domains like financial fraud detection, explainability isn't just a nice-to-have feature—it's essential for several reasons:
          </p>
          
          <ul>
            <li><strong>Regulatory requirements</strong> - Financial institutions are increasingly required to explain automated decisions</li>
            <li><strong>Building trust</strong> - Users need to understand why their transactions might be flagged</li>
            <li><strong>Error detection</strong> - Understanding model reasoning helps identify biases and failure modes</li>
            <li><strong>Knowledge discovery</strong> - Explanations can reveal fraud patterns that human analysts might miss</li>
          </ul>
          
          <h2>The XAI Methods I Implemented</h2>
          <p>
            After extensive research, I implemented and compared three leading XAI techniques for our deep learning models:
          </p>
          
          <h3>SHAP (SHapley Additive exPlanations)</h3>
          <p>
            SHAP values, based on cooperative game theory, distribute the "credit" for a prediction among features. When applying SHAP to our CNN model, I discovered:
          </p>
          
          <ul>
            <li>Feature importance varied significantly across different fraud types</li>
            <li>Transaction time and merchant category had higher SHAP values than expected</li>
            <li>The computational cost for large datasets was a significant challenge</li>
          </ul>
          
          <CodeBlock
            language="python"
            code={`# Implementing SHAP for our CNN model
explainer = shap.DeepExplainer(model, background_data)
shap_values = explainer.shap_values(test_data)

# Visualizing feature importance
shap.summary_plot(shap_values, test_data, feature_names=feature_names)`}
          />

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="https://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/visualisation/shap_summary_global_of_CNN.png" 
                alt="Explainable AI visualization showing feature importance in fraud detection"
                fill
                className="object-cover object-top"
                priority
              />
          </div>
          <p className="text-sm text-gray-500 italic text-center">
            SHAP Summary Plot: Feature Importance in CNN Model for Fraud Detection
          </p>
          
          <h3>LIME (Local Interpretable Model-agnostic Explanations)</h3>
          <p>
            LIME creates simplified local surrogate models to explain individual predictions. My implementation revealed:
          </p>
          
          <ul>
            <li>LIME provided more intuitive explanations for non-technical stakeholders</li>
            <li>Explanations were sometimes less stable than SHAP across similar transactions</li>
            <li>The choice of neighborhood size significantly affected explanation quality</li>
          </ul>
          
          <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
            <Image 
              src="/images/blog/lime-explanation.png" 
              alt="LIME explanation of an individual transaction"
              fill
              className="object-contain"
            />
          </div>
          
          <h3>Anchors</h3>
          <p>
            Anchors generate rule-based explanations with high precision. I found they were:
          </p>
          
          <ul>
            <li>Most useful for explaining clear-cut fraud cases</li>
            <li>Excellent for creating actionable fraud detection rules</li>
            <li>Limited in explaining complex interactions between features</li>
          </ul>
          
          <h2>Evaluating Explainability: Beyond Intuition</h2>
          <p>
            One of the most challenging aspects was determining how to quantitatively evaluate the quality of explanations. I implemented three primary metrics:
          </p>
          
          <h3>1. Faithfulness</h3>
          <p>
            Measures how accurately explanations reflect the model's actual reasoning. I calculated faithfulness by progressively removing features ranked by importance and measuring the impact on predictions.
          </p>
          
          <p>
            <strong>Key finding:</strong> SHAP consistently provided more faithful explanations than both LIME and Anchors for our models, with an average faithfulness score of 0.602 compared to 0.325 for LIME and 0.364 for Anchors.
          </p>
          
          <h3>2. Monotonicity</h3>
          <p>
            Evaluates whether adding more important features consistently improves predictions in the expected direction.
          </p>
          
          <p>
            <strong>Key finding:</strong> All methods performed similarly on monotonicity, with Anchors slightly outperforming at 0.478, followed by LIME at 0.467 and SHAP at 0.447.
          </p>
          
          <h3>3. Completeness</h3>
          <p>
            Measures how comprehensively the explanation covers the model's decision factors.
          </p>
          
          <p>
            <strong>Key finding:</strong> LIME achieved the highest completeness score at 0.217, followed by SHAP at 0.171, with Anchors significantly lower at 0.028.
          </p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Method</th>
                  <th className="border px-4 py-2">Faithfulness</th>
                  <th className="border px-4 py-2">Monotonicity</th>
                  <th className="border px-4 py-2">Completeness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">SHAP</td>
                  <td className="border px-4 py-2">0.602</td>
                  <td className="border px-4 py-2">0.447</td>
                  <td className="border px-4 py-2">0.171</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">LIME</td>
                  <td className="border px-4 py-2">0.325</td>
                  <td className="border px-4 py-2">0.467</td>
                  <td className="border px-4 py-2">0.217</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Anchors</td>
                  <td className="border px-4 py-2">0.364</td>
                  <td className="border px-4 py-2">0.478</td>
                  <td className="border px-4 py-2">0.028</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2>Unexpected Lessons</h2>
          
          <h3>1. Different Users Need Different Explanations</h3>
          <p>
            Perhaps the most surprising discovery was that different stakeholders needed fundamentally different types of explanations:
          </p>
          <ul>
            <li>Data scientists wanted detailed feature importance distributions</li>
            <li>Fraud analysts preferred rule-based explanations for action</li>
            <li>Customers needed simple, concrete reasons for flagged transactions</li>
          </ul>
          
          <p>
            This led me to implement a multi-level explanation system that could generate different explanation types from the same underlying models.
          </p>
          
          <h3>2. Confidence Calibration is Crucial</h3>
          <p>
            I found that explanations without confidence levels can be misleading. Adding confidence indicators to explanations (e.g., "The model is 92% certain this transaction is fraudulent because...") significantly increased user trust.
          </p>
          
          <p>
            Our analysis of XAI performance across different confidence levels revealed interesting patterns:
          </p>
          
          <ProsCard
            title="SHAP's Consistency"
            pros={[
              "Maintained stable faithfulness (0.544-0.629) across all confidence levels",
              "Completeness improved with higher confidence predictions (0.089 → 0.322)",
              "Most reliable for high-stakes decisions"
            ]}
          />
          
          <ConsCard
            title="Anchors' Limitations"
            cons={[
              "Very low completeness scores (0.028 average)",
              "Best used for rule extraction rather than comprehensive explanations",
              "Performance dropped for high-confidence predictions"
            ]}
          />
          
          <h3>3. Explanations Revealed Model Flaws</h3>
          <p>
            Perhaps most valuably, implementing XAI uncovered biases in our training data. For example, our model was giving undue importance to transaction times for certain merchant categories—a pattern that wouldn't have been discovered without explanation tools.
          </p>
          
          <h2>Architecture of Our Final XAI System</h2>
          <p>
            After multiple iterations, we settled on a hybrid approach:
          </p>
          
          <ol>
            <li><strong>Base detection layer:</strong> CNN and LSTM models for fraud detection</li>
            <li><strong>Explanation generation layer:</strong> SHAP for technical users, Anchors for rule extraction</li>
            <li><strong>Explanation translation layer:</strong> Converts technical explanations into appropriate formats for different stakeholders</li>
            <li><strong>Confidence estimation:</strong> Provides uncertainty measures for all explanations</li>
            <li><strong>Feedback mechanism:</strong> Collects user feedback on explanation quality to improve future iterations</li>
          </ol>
          
          <div className="relative w-full h-[500px] my-8 rounded-lg overflow-hidden">
            <Image 
              src="/images/blog/system-architecture.pnghttps://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/visualisation/system_architecture.png" 
              alt="System architecture diagram of the XAI fraud detection system"
              fill
              className="object-contain"
            />
          </div>
          
          <h2>Key Takeaways</h2>
          <p>
            If you're building explainable AI systems, here are my most important lessons:
          </p>
          
          <ol>
            <li><strong>Start with explainability in mind</strong> — it's much harder to add after model development</li>
            <li><strong>Consider multiple XAI techniques</strong> — no single method works best for all scenarios</li>
            <li><strong>Define your evaluation metrics early</strong> — you can't improve what you don't measure</li>
            <li><strong>Remember the human element</strong> — technical excellence means nothing if users don't understand explanations</li>
            <li><strong>Use explanations as a debugging tool</strong> — they'll help you build better models overall</li>
          </ol>
          
          <h2>Looking Forward</h2>
          <p>
            Building this system taught me that explanation is not just a technical problem but a deeply human-centered one. As we continue to deploy AI in critical domains, several challenges remain:
          </p>
          
          <ul>
            <li>Computational efficiency for real-time explanations at scale</li>
            <li>Better metrics to quantify explanation quality</li>
            <li>Creating consistent explanations across different model types</li>
            <li>Developing explanations that adapt to user feedback and contexts</li>
          </ul>
          
          <p>
            My journey building XAI systems has convinced me that transparent, interpretable AI isn't just possible—it's essential for responsible deployment of these powerful technologies in domains like fraud detection.
          </p>
          
          <p>
            For those interested in the technical details of this project, including code samples and evaluation methodologies, feel free to check out my <a href="https://github.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI" className="text-blue-600 hover:underline">GitHub repository</a> or reach out directly with questions.
          </p>
        </div>
      </article>
    </>
  );
}
