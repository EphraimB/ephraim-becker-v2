import Container from "@mui/material/Container";
import styles from "./page.module.css";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileCard />
      </Container>
    </main>
  );
}
