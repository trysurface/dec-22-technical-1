import { TextComponent } from '@/types/components';

interface TextRendererProps {
  component: TextComponent;
}

export const TextRenderer = ({ component }: TextRendererProps) => {
  const { text, styling } = component.props;

  return <p style={styling}>{text}</p>;
};
