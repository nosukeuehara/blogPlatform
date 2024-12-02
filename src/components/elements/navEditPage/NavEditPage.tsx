import { ButtonProps } from "@/types/types";
import Link from "next/link";
import React from "react";

const NavEditPage = (props: ButtonProps) => {
  return (
    <div>
      <Link href={props.link}>{props.btnText}</Link>
    </div>
  );
};

export default NavEditPage;
