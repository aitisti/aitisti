import Head from 'next/head';
import Question from '../components/common/Question';
import { InferGetStaticPropsType } from 'next';
import { QuestionModel } from '../types/QuestionModel';
import { Document } from '@contentful/rich-text-types';
import AccountantDisclaimer from '../components/common/AccountantDisclaimer';
import contentfulClient from '../lib/contentful/client';

export const getStaticProps = async () => {
  const res = await contentfulClient.getEntries({
    content_type: 'question',
    order: 'fields.priority',
    'fields.type[match]': 'Contractor',
  });
  const questions: QuestionModel[] = res.items.map((i) => {
    const entry = i.fields as {
      question: string;
      answer: Document;
    };

    return {
      id: i.sys.id,
      q: entry.question,
      a: entry.answer,
    };
  });

  return {
    props: { questions },
  };
};

const ContractorPage = ({
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Aitiști | Contractor</title>
      </Head>
      <AccountantDisclaimer />
      <section>
        {questions.map((q, i) => (
          <Question key={i} question={q} />
        ))}
      </section>
    </>
  );
};

export default ContractorPage;
