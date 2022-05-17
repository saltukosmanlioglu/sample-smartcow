import Table from "widgets/table";

import "../Account.scss";

const Billing: React.FunctionComponent = () => {
  const columns = [
    {
      name: "id",
      title: "REFERENCE ID",
    },
    {
      name: "date",
      icon: "/images/order.png",
      onClick: () => console.log("sa"),
      title: "DATE",
    },
    {
      name: "amount",
      title: "AMOUNT",
    },
    {
      name: "invoice",
      title: "INVOICE",
      render: () => <img src="/images/pdf.png" alt="PDF" />,
    },
  ];

  const rows = [
    {
      id: "4571222f6rthswfg9981fr55",
      date: "7/12/2020",
      amount: "$28",
      invoice: "$28",
    },
    {
      id: "4571222f6rthswfg9981fr55",
      date: "7/12/2020",
      amount: "$28",
      invoice: "$28",
    },
    {
      id: "4571222f6rthswfg9981fr55",
      date: "7/12/2020",
      amount: "$28",
      invoice: "$28",
    },
  ];

  return (
    <div className="billing">
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default Billing;
