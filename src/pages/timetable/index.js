import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'

export default function Hello() {
  return (
    <Layout title="Hello" description=" React Page">
      <div className={styles.container}>
        
        <p>
           react Page Good to go
        </p>
      </div>
    </Layout>
  );
}