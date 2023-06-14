import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({name, size = 20, color = '#000'}: IconProps) => (
  <Ionicons name={name} size={size} color={color} />
);

export default Icon;
