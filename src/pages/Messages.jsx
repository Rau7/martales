import React from "react";
import "../styles/messages.scss";
import { useEffect, useState } from "react";
import { database } from "../fire/firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

import Moment from "moment";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endIndex, setEndIndex] = useState(0);
  const [loadDis, setLoadDis] = useState("");

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            pagingType: "full_numbers",
            pageLength: 20,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "copy",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-secondary bg-secondary",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
          });
        }, 1000);
      });
    }
  }, []);

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

  const showTable = () => {
    try {
      return messages.map((item, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td rowspan="">{item.note}</td>
            <td>{xspectarDateFormat(item.date)}</td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
    }
  };

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="message-area">
      <div className="message-cont">
        <div class="table-responsive p-0 pb-2">
          <table
            id="table"
            className="table align-items-center justify-content-center mb-0"
          >
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Number
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Name
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Email
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  # of Participants
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Message
                </th>
                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>{showTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Messages;
