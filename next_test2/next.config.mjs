// npm install babel-plugin-react-compiler 설치

// reactcomplier 적용 nextjs-15

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      reactCompiler: true,
    },
  }
   
  module.exports = nextConfig