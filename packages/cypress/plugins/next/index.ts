import { Configuration } from 'webpack';
// TODO(caleb): do we need this?
//  if we support next apps then _yes_ but isn't really recommend
//  for an "app" to be component testing. should be libs only?
export function componentDevServer(
  tsConfigPath = 'tsconfig.spec.json',
  compiler: 'swc' | 'babel' = 'swc',
  extendWebPackConfig?: (config: Configuration) => Configuration
) {
  const webpackConfig = require('next/dist/compiled/webpack/webpack');
}
