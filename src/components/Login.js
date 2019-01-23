import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import logo from '../images/ducksoup_logo.png'

const Login = (props) => (
  <React.Fragment>
  <div className='login-form' id="login">
    <img className='logo' src={logo} alt="ducksoup logo" />

    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

          <Button color='blue' fluid size='large' onClick={props.changeLoggedIn}>
              Login
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  </div>
  </React.Fragment>
)

export default Login
