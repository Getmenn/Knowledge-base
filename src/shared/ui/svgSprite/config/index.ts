import AccessSvg from '@/shared/assets/svg/access.svg';
import Exclamation from '@/shared/assets/svg/exclamation.svg';
import InfoSvg from '@/shared/assets/svg/info.svg';
import WarningSvg from '@/shared/assets/svg/warning.svg';

export const svgItem = {
    access: AccessSvg,
    error: WarningSvg,
    info: InfoSvg,
    warning: WarningSvg,
    exclamation: Exclamation,
};

export type SvgType = keyof (typeof svgItem);
