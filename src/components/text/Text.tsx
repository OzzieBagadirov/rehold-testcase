import { ComponentProps } from 'react';

type SizeProps = {
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  bigS?: boolean;
  bigM?: boolean;
  bigL?: boolean;
  bigXl?: boolean;
};

type FontProps = {
  serif?: boolean;
  mono?: boolean;
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
};

type LineHeightProps = {
  lineHeight?: string | number;
};

type AlignProps = {
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
};

type TextProps = ComponentProps<'div'> & SizeProps & FontProps & LineHeightProps & AlignProps;

const sizeFromProps = (props: SizeProps) => {
  const { xs, s, m, l, xl, xxl, bigS, bigM, bigL, bigXl } = props;

  const classSize =
    (xs && 'xs') ||
    (s && 's') ||
    (m && 'm') ||
    (l && 'l') ||
    (xl && 'xl') ||
    (xxl && 'xxl') ||
    (bigS && 'big-s') ||
    (bigM && 'big-m') ||
    (bigL && 'big-l') ||
    (bigXl && 'big-xl') ||
    'xl';

  return `txt-sz-${classSize}`;
};

const fontFromProps = (props: FontProps) => {
  const { serif, mono, light, regular, medium } = props;

  const classFont = (serif && 'serif') || (mono && 'mono') || 'serif';
  const classWeight =
    (light && 'light') || (regular && 'regular') || (medium && 'medium') || 'regular';

  if (!classFont || !classWeight) return '';

  return `txt-${classFont}-${classWeight}`;
};

const lineHeightFromProps = (props: LineHeightProps) => {
  const { lineHeight } = props;

  if (!lineHeight) return '';

  return `txt-lh-${lineHeight}`;
};

const alignFromProps = (props: AlignProps) => {
  const { alignStart, alignEnd, alignCenter } = props;

  const align = (alignStart && 'start') || (alignEnd && 'end') || (alignCenter && 'center');

  if (!align) return '';

  return `txt-align-${align}`;
};

const Text = (props: TextProps) => {
  const size = sizeFromProps(props);
  const font = fontFromProps(props);
  const lh = lineHeightFromProps(props);
  const align = alignFromProps(props);

  const {
    xs,
    s,
    m,
    l,
    xl,
    xxl,
    bigS,
    bigM,
    bigL,
    bigXl,
    serif,
    mono,
    light,
    regular,
    medium,
    lineHeight,
    alignStart,
    alignEnd,
    alignCenter,
    ...otherProps
  } = props;

  return (
    <div {...otherProps} className={`${font} ${size} ${lh} ${align} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Text;
