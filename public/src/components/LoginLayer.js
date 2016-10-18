import React from 'react';

import { FormattedMessage } from 'react-intl';

import Box     from 'grommet/components/Box';
import Button  from 'grommet/components/Button';
import Layer   from 'grommet/components/Layer';
import Menu    from 'grommet/components/Menu';
import Section from 'grommet/components/Section';

// TODO: Review Icons (was not updated)
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import GoogleIcon from 'grommet/components/icons/base/SocialGoogle';
import EmailIcon from 'grommet/components/icons/base/SocialEmail';

const OPTIONS = [{ type:"facebook", text: "login.facebook", icon: (<FacebookIcon />)},
                 { type:"google", text: "login.google", icon: (<GoogleIcon />)},
                 { type:"email", text: "login.email", icon: (<EmailIcon />)}];

export default class LoginLayer extends React.Component {

    constructor () {
        super();
        this._login = this._login.bind(this);
    }

    _login(type) {
        alert("clicou");
    }

    render () {

        // TODO: change interface
        const links = (
            OPTIONS.map(op => ( 
                    <Button
                    key={op.key}
                    onClick={() => this._login(op.key)}
                    icon={op.icon}
                    fill={false}
                    label={<FormattedMessage id={op.text}/>} />
                )));

        let layer = (
            <Layer closer={true} align="center">
                <Section>
                    <Box pad="medium" justify="start">
                        <Menu inline={true} direction="column">
                            {links}
                        </Menu>
                    </Box>
                </Section>
            </Layer>
            );

        return layer;
    }
}
