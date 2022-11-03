import React from 'react';
import Booklist from './Booklist';
import AddBook from './AddBook';

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: 'Book1',
          author: 'random',
          chapter: 'chapter 1',
          category: 'action',
          completed: true,
        },
        {
          id: 2,
          title: 'Book2',
          author: 'random',
          chapter: 'chapter 1',
          category: 'action',
          completed: false,
        },
        {
          id: 3,
          title: 'Book3',
          author: 'random',
          chapter: 'chapter 1',
          category: 'action',
          completed: false,
        },
      ],
    };
  }

  render() {
    const books = this.state;
    return (
      <main>
        <Booklist
          books={books.list}
        />
        <AddBook />
      </main>
    );
  }
}

export default BookContainer;
