import { Card } from './Card';

export default function Cardapp() {
  return (
    <>
      <Card variant="info">
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <Card variant="error" outlined>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <Card variant="success" elevated>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <Card variant="warning" outlined elevated>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
    </>
  );
}
