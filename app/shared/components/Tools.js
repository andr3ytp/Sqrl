// @flow
import React, { Component } from 'react';
import { Divider, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import WelcomeConnectionContainer from '../containers/Welcome/Connection';
import GlobalSettingsLanguage from './Global/Settings/Language';
import GlobalSettingsBlockExplorer from './Global/Settings/BlockExplorer';

class Tools extends Component<Props> {
  render() {
    const {
      actions,
      blockExplorers,
      i18n,
      settings,
      t
    } = this.props;

    return (
      <Segment attached="top">
        <Header icon size="large" textAlign="center">
          <Icon
            name="cog"
          />
          {t('tools_title')}
          <Header.Subheader
            content={t('tools_description')}
          />
        </Header>
        <Divider />
        <Header>
          {t('tools_settings_header')}
          <Header.Subheader
            content={t('tools_settings_subheader')}
          />
        </Header>
        <Form>
          {(settings.walletMode !== 'cold')
            ? (
              <Form.Field>
                <label>{t('tools_change_block_explorer')}</label>
                <GlobalSettingsBlockExplorer
                  actions={actions}
                  blockExplorers={blockExplorers}
                  defaultValue={settings.blockExplorer}
                  selection
                />
              </Form.Field>
            ) : false
          }
          <Form.Field>
            <label>{t('tools_change_language')}</label>
            <GlobalSettingsLanguage
              actions={actions}
              setLanguage={settings.lang}
              i18n={i18n}
              selection
            />
          </Form.Field>
          {(settings.walletMode !== 'cold')
            ? (
              <Form.Field>
                <Segment secondary stacked>
                  <WelcomeConnectionContainer />
                </Segment>
              </Form.Field>
            ) : false
          }
        </Form>
      </Segment>
    );
  }
}

export default translate('tools')(Tools);
