import { IconType } from "react-icons";
import React from "react";

interface IconComponentProps {
  icon: IconType;
  size?: number | string;
  color?: string;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({
  icon: Icon,
  size,
  color,
  className,
}) => {
  const SafeIcon = Icon as unknown as React.ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
  return <SafeIcon size={size} color={color} className={className} />;
};

export default IconComponent;
