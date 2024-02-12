import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Under Construction
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.underConstructionContent}>
          <ul className={styles.bulletList}>
            <li>
              <strong>Updates:</strong> We are making important updates to
              improve functionality and design.
            </li>
            <li>
              <strong>New Features:</strong> Exciting new features are on the
              way to enhance your user experience.
            </li>
            <li>
              <strong>Maintenance:</strong> We're performing essential
              maintenance to ensure a smooth and secure browsing experience.
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/construction"
          >
            Click Me!
          </Link>
        </div>
      </div>
    </header>
  );
}
