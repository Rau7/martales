import React from "react";
import "../styles/messages.scss";
import { useEffect, useState } from "react";
import { database } from "../fire/firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import $ from "jquery";
import DataTable, { createTheme } from "react-data-table-component";
import Moment from "moment";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endIndex, setEndIndex] = useState(0);
  const [loadDis, setLoadDis] = useState("");

  useEffect(() => {
    const messArr = [];
    const q = query(collection(database, "mamessages"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((d) => messArr.push(d.data()));
      setMessages(messArr);
      setIsLoading(messArr.length <= 0 ? true : false);
    });
  }, []);

  const xspectarDateFormat = (date) => {
    return Moment(date.toDate()).format("MMM Do, YYYY H:m");
  };

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="message-area">
      <div className="message-cont">
        <table>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
          {messages &&
            messages.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td rowspan="">{item.note}</td>
                <td>{xspectarDateFormat(item.date)}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Messages;
