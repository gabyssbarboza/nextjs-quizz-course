import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Results.module.css";
import Statistics from "@/components/Statistics";
import Button from "@/components/Button";

const Results = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
    }
  }, [router.isReady]);

  const total = +router.query.total;
  const corrects = +router.query.corrects;
  const porcent = Math.round((corrects / total) * 100);

  return (
    <div className={styles.resultsContainer}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        {router && (
          <>
            {" "}
            <Statistics value={total} text="Perguntas" />
            <Statistics value={corrects} text="Certas" bgColor="#9cd2a4" />
            <Statistics
              value={`${porcent}%`}
              text="Percentual"
              bgColor="#DE6A33"
            />
          </>
        )}
      </div>
      <Button href="/" txt="Tentar Novamente" />
    </div>
  );
};

export default Results;
