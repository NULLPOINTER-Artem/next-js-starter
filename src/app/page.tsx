import ImageImporter from "@/components/ImageImporter";
import IconImporter from "@/components/IconImporter";

import styles from "@/scss/views/home.module.scss";

export default function Home() {
  return (
    <main className={styles['home-page']}>
      <h1>
        Hello Next.js! Im Artem!
      </h1>

      <IconImporter name-icon="gear" fill="#818" />

      <ImageImporter
        name-image="test-pic.jpg"
        placeholder="blur"
        alt="Test importer"
      />
    </main>
  );
}
