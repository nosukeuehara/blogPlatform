import Link from "next/link";
import React from "react";
import Image from "next/image";

const SaveReturnBtn = () => {
  return (
    <div>
      <Link href="/dashboard">
        <Image
          src={"/leftArrow.svg"}
          alt={"保存して戻るボタン"}
          width={10}
          height={10}
        />
      </Link>
    </div>
  );
};

export default SaveReturnBtn;
