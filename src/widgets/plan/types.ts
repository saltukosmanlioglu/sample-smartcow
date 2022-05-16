export interface Matters {
  isCheck?: boolean;
  title: string;
}

export interface PlanProps {
  activePlan: boolean;
  matters: Array<Matters>;
  price: string;
  title: string;
}
