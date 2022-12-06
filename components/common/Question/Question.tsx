import styles from './Question.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { QuestionModel } from '../../../types/QuestionModel';
import React from 'react';
import useCollapse from 'react-collapsed';

type Props = {
  question: QuestionModel;
};

const Question = ({ question }: Props) => {
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div className={styles.container}>
      <div className={styles.question} {...getToggleProps()}>
        {question.q}
      </div>
      <div {...getCollapseProps()}>
        <div className={styles.answer}>
          {documentToReactComponents(question.a)}
        </div>
      </div>
    </div>
  );
};

export default Question;
