import React from 'react';

const useInfoStatusText = (statusText, orderItem, a) => {
    if (!statusText) return <p></p>;
        if (statusText === true) {
            if (a === 'tool') {
                return (
                    <h6 style={{color: "green"}}>Заказ зроблено: {`Машина: ${orderItem.machine}, Інструмент: ${orderItem.app}, Матеріал: ${orderItem.material}`}</h6>
                );
            } else if (a === 'pers') {
                return (
                    <h6 style={{color: "green"}}>Заказ зроблено: {`Машина: ${orderItem.machine}, Виклик наладчика${orderItem.mechanic === 'DIE' ? ' - Die-центру' :
                        orderItem.mechanic === 'Mechan' ? ' по машинах/верстатах' : false}`}</h6>
                    );
            } else console.error(err => `Невірний третій аргумент в хуці "useInfoStatusText" ( ${err.message} ).`);
        } else if (statusText === "empty") {
            return (
                <h6 style={{color: "#ff4000"}}>Будь-ласка заповніть усі поля.</h6>
            );
        } else if (statusText === 'already') {
            return (
                <h6 style={{color: "#ff4000"}}>Такий заказ був щойно зроблений.</h6>
            );
        } else {
            console.error('Невідома помилку, зберігайте спокій!;)')
        }
}

export default useInfoStatusText;