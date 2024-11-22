import { ReactNode } from "react"
import { SettingField } from '@gant-lowcode/lowcode-engine';

class MixedSetterConfig {
  config: {
    renderSlot?: (props: {bindCode?: string, field?: SettingField}) => ReactNode
  } = {}

  setConfig(config: {
    renderSlot?: (props: {bindCode?: string, field?: SettingField}) => ReactNode
  }) {
    this.config = config;
  }
}

export const MixedSetterController = new MixedSetterConfig()
