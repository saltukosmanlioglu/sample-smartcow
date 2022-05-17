export interface TableProps {
  columns: Array<{
    icon?: string;
    name: string;
    onClick?: () => void;
    render?: () => void;
    title: string;
  }>;
  rows: Array<any>;
}
