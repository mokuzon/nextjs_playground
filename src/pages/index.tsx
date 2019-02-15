import React from 'react';
import Link from 'next/link'
import Sample from '../components/Sample';

export default () => (
  <div>
    <div>Hello world!</div>
    <Sample />

    <Link href="/entry">
      <a>entry link</a>
    </Link>
  </div>
);
