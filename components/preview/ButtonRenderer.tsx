import { ButtonComponent } from '@/types/components';

interface ButtonRendererProps {
  component: ButtonComponent;
}

export const ButtonRenderer = ({ component }: ButtonRendererProps) => {
  const { text, styling } = component.props;

  return (
    <button style={{ ...styling, cursor: 'pointer' }}>
      {text}
    </button>
  );
};
