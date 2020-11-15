import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import HomeBody from "../components/home-body";
import markdownToHtml from "../lib/markdownToHtml";
import { getPostBySlug } from "../lib/api";
import PostType from "../types/post";

type Props = { post: PostType };

const Index = ({ post }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Mingjie Jiang | @itsmingjie</title>
        </Head>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Header />
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5">
              {post.title}
            </h2>
            <HomeBody content={post.content} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const post = getPostBySlug("index", [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};
