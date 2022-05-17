import Plan from "widgets/plan";

import "../Account.scss";

const MyPlan: React.FunctionComponent = () => {
  const plans = [
    {
      activePlan: false,
      matters: [
        { title: "Pellentesque interdum libero et" },
        { title: "Pellentesque posuere" },
        { title: "Cras sed felis eget" },
        { title: "Maecenas eget luctus" },
        { title: "Nullam vitae augue" },
      ],
      price: "0",
      title: "Free",
    },
    {
      activePlan: false,
      matters: [
        { title: "Maecenas eget luctus purus" },
        { title: "Graesent in sollicitudin velit" },
        { title: "Donec in orci vitae nisi" },
        { title: "Class aptent taciti" },
        { isCheck: false, title: "Ut blandit vestibulum" },
      ],
      price: "12",
      title: "Pro",
    },
    {
      activePlan: true,
      matters: [
        { title: "Etiam ac finibus nisi, a porttitor" },
        { title: "Quisque tincidunt velit a sapien vulputate" },
        { title: "Vivamus pulvinar" },
        { title: "In hac habitasse platea" },
        { isCheck: false, title: "Nullam vitae augue" },
      ],
      price: "23",
      title: "Team",
    },
    {
      activePlan: false,
      matters: [
        { title: "Praesent in sollicitudin velit" },
        { title: "Nulla tincidunt finibus interdum" },
        { title: "Nullam vitae augue" },
        { title: "Curabitur eleifend" },
        { title: "Quisque vel ex enim" },
      ],
      price: "43",
      title: "Agency",
    },
  ];

  return (
    <div className="row gap-40" style={{ marginTop: 100 }}>
      {plans.map((plan, index) => (
        <Plan
          key={index}
          activePlan={plan.activePlan}
          matters={plan.matters}
          price={plan.price}
          title={plan.title}
        />
      ))}
    </div>
  );
};

export default MyPlan;
