"use client";

import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
import ResumeDocument from "@/components/ResumeDocument";

export default function PDFResumeDownload() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <PDFDownloadLink
        document={<ResumeDocument />}
        fileName="ephraim-becker-resume.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download resume"
        }
      </PDFDownloadLink>
      <br />
      <br />
    </Box>
  );
}
