/* eslint-disable camelcase */
import React from 'react'
import { ConfigProvider } from 'antd'
import es_ES from 'antd/lib/locale/es_ES'

export const AntDesignConfigProvider = ({ children }) => {
  return (
    <ConfigProvider locale={es_ES} theme={{ token: { colorPrimary: '#099' } }}>
      {children}
    </ConfigProvider>
  )
}
