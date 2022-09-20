import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "./services/books.services";

const BookList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
    // console.log(books);
    // console.log(JSON.stringify(books, undefined, 2));
  }, []);
  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    // console.log(data.docs[0].ref.id);
    setBooks(
      data.docs.map(function (doc) {
        return { ...doc.data(), id: doc.id };
        // Method 2, above is the same as below:
        // let abc = doc.data();
        // abc.id = doc.id;
        // return abc;
      })
    );
    console.log(books);
  };
  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  // const getBookId = () => {};
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button variant="secondary" className="edit" onClick={(e) => getBookId(doc.id)}>
                    Edit
                  </Button>
                  <Button variant="danger" className="delete" onClick={(e) => deleteHandler(doc.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BookList;
