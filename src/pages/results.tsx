import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Results.module.css";
import Statistics from "@/components/Statistics";
import Button from "@/components/Button";

const Results = () => {
  const router = useRouter();

  const total = router.query.total;
  const corrects = router.query.corrects;
  const porcent = Math.round((Number(corrects) / Number(total)) * 100);

  return (
    <div className={styles.resultsContainer}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Statistics value={total} text="Perguntas" />
        <Statistics value={corrects} text="Certas" bgColor="#9cd2a4" />
        <Statistics value={`${porcent}%`} text="Percentual" bgColor="#DE6A33" />
      </div>
      <Button href="/" txt="Tentar Novamente" />
    </div>
  );
};

export default Results;
