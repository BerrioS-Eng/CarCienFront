"use client";

import Banner from "@/components/banner";
import { useAuth } from "@/context/auth.context";
import { useEffect } from "react";

export default function Home() {
  let { setUser } = useAuth();

  useEffect(() => {
    let user =
      typeof window !== "undefined"
        ? window.localStorage.getItem("userCar100")
        : false;

    user = JSON.parse(user);

    console.log(user, "insdjsfbsdf ");

    setUser(user);
  }, []);

  return (
    <div className="">
      <main id="main" className="entry-content">
        <div id="primary" className="main">
          <Banner />
        </div>
      </main>
    </div>
  );
}
