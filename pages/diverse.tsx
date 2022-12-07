import Link from 'next/link';
import React from 'react';

const MiscPage = () => {
  return (
    <>
      <section>
        <Link href="/carti">Cărți</Link>
      </section>
      <section>
        <Link href="/filme-si-seriale">Filme și seriale</Link>
      </section>
      <section>
        <Link href="/intrebari">Întrebări</Link>
      </section>
    </>
  );
};

export default MiscPage;
