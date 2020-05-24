import React from 'react';
import { Pagination, Row } from 'react-bootstrap';

const Paginat = ({ changePage, currentNumber, lastPage }) => {

    const handleClick = (numb) => {
        changePage(numb);
    }

    const newNumber = (ex) => {
        const newNumber = currentNumber + ex;
        return(Number(newNumber));
    }

    return(
        <Row className="mb-2 mt-2 justify-content-md-center">
            <Pagination>
                {currentNumber >= 4 ? <Pagination.Prev onClick={() => handleClick(Number(currentNumber - 1))}/> : false}
                {currentNumber >= 4 ? <Pagination.Item onClick={() => handleClick(Number(1))}>{1}</Pagination.Item> : false}
                {currentNumber >= 4 ? <Pagination.Ellipsis /> : false}

                {currentNumber === 1 ? <Pagination.Item active>{1}</Pagination.Item> : 
                    currentNumber === 2 ? <Pagination.Item onClick={() => handleClick(newNumber(Number(-1)))}>{newNumber(Number(-1))}</Pagination.Item> : 
                    <Pagination.Item onClick={() => handleClick(newNumber(Number(-2)))}>{newNumber(Number(-2))}</Pagination.Item>
                }
                {currentNumber === 2 ? <Pagination.Item active>{2}</Pagination.Item> : 
                    currentNumber === 1 ? <Pagination.Item onClick={() => handleClick(newNumber(Number(+1)))}>{newNumber(Number(+1))}</Pagination.Item> : 
                    <Pagination.Item onClick={() => handleClick(newNumber(Number(-1)))}>{newNumber(Number(-1))}</Pagination.Item>
                }
                {currentNumber <= 2 ? <Pagination.Item onClick={() => handleClick(3)}>{3}</Pagination.Item> : 
                <Pagination.Item active>{currentNumber}</Pagination.Item>
                }
                {lastPage < 4 || currentNumber >= lastPage - 1 ? false : 
                currentNumber < 4 || lastPage < 5 ? <Pagination.Item onClick={() => handleClick(4)}>{4}</Pagination.Item> : 
                <Pagination.Item onClick={() => handleClick(newNumber(Number(+1)))}>{newNumber(Number(+1))}</Pagination.Item>
                }
                {lastPage < 5 || currentNumber >= lastPage - 2 ? false : 
                currentNumber < 4 || lastPage < 6 ? <Pagination.Item onClick={() => handleClick(5)}>{5}</Pagination.Item> : 
                <Pagination.Item onClick={() => handleClick(newNumber(Number(+2)))}>{newNumber(Number(+2))}</Pagination.Item>
                }
                {currentNumber === lastPage ? false : lastPage > 5 ? <Pagination.Ellipsis /> : false}
                {currentNumber === lastPage ? false : lastPage > 5 ? <Pagination.Item onClick={() => handleClick(lastPage)}>{lastPage}</Pagination.Item> : false}
                {currentNumber === lastPage ? false : lastPage > 5 ? <Pagination.Next onClick={() => handleClick(Number(currentNumber + 1))}/> : false}
            </Pagination>
        </Row>
    );
}

export default Paginat;