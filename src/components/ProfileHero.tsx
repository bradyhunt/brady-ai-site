import { SocialIcons } from './SocialIcons';
import { siteConfig } from '@/lib/siteConfig';

export function ProfileHero() {
  return (
    <section>
      <div className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
        <div className="float-left mr-6 mb-4">
          <img
            src="/images/profile/prof_pic.jpg"
            alt={siteConfig.title}
            className="w-[300px] md:w-[400px] rounded-xl shadow-lg"
          />
          <SocialIcons className="mt-3 justify-center text-gray-600 dark:text-gray-400" />
        </div>
        <p className="mb-4">
          I am the Director of AI at{' '}
          <a
            href="https://www.artisight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            Artisight
          </a>
          , where I lead the development of computer vision and machine learning
          systems that power the{' '}
          <a
            href="https://www.fiercehealthcare.com/health-tech/how-nvidia-backed-artisight-taking-smart-hospitals-next-level-ai-and-computer-vision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            leading smart hospital platform
          </a>{' '}
          in the United States. Our AI platform is deployed across
          30 health systems, with thousands of active inpatient rooms and
          hundreds of operating rooms. I build systems that use real-time video, sensor
          fusion, and edge AI on{' '}
          <a
            href="https://www.prnewswire.com/news-releases/artisight-expands-collaborations-with-nvidia-and-karl-storz-to-transform-operating-room-technology-through-ai-and-automation-302403575.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            NVIDIA Jetson
          </a>{' '}
          infrastructure to autonomously document clinical workflows, reduce
          falls, and give time back to bedside nurses.
        </p>
        <p className="mb-4">
          Previously, I was a Research Scientist at{' '}
          <a
            href="https://sites.dartmouth.edu/optmed/about-us/laboratory-faculty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            Dartmouth
          </a>
          , where I worked on{' '}
          <a
            href="https://onlinelibrary.wiley.com/doi/10.1002/lsm.23414"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            AI-powered imaging systems
          </a>{' '}
          for real-time treatment guidance in radiotherapy, surgery, and
          dermatology. I completed my PhD in Bioengineering under{' '}
          <a
            href="https://kortum.rice.edu/people/rebecca-richards-kortum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            Rebecca Richards-Kortum
          </a>{' '}
          at Rice University, where I led efforts to transform cervical cancer
          prevention using point-of-care imaging in{' '}
          <a
            href="https://onlinelibrary.wiley.com/doi/10.1002/ijc.33543"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            Brazil
          </a>
          ,{' '}
          <a
            href="https://www.basichealth.org/our-work/where-we-work/el-salvador/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            El Salvador
          </a>
          , and{' '}
          <a
            href="https://www.nationalacademies.org/our-work/peerccspt/evaluating-innovative-technologies-and-approaches-to-addressing-cervical-cancer-in-the-republic-of-mozambique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-link dark:text-primary-light font-medium hover:underline"
          >
            Mozambique
          </a>
          . I hold a Bachelor&apos;s degree in Biophysics{' '}
          <em>magna cum laude</em> from Brigham Young University.
        </p>
      </div>
    </section>
  );
}
