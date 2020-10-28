import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Accommodations() {

    useEffect(() => {
        document.title = 'Student`s Home - Hospedagens'
    }, []);

  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
