import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import sac from "../image/sac.png";

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton variant="rounded" width={450} height={450} animation="wave" />
      ) : (
        <img src={sac} width={450} height={450} />
      )}
    </div>
  );
}

export default MuiSkeleton;
