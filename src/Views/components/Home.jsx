import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

export default class Home extends React.Component {
  state = {
    loading: true,
    Data: [],
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        {this.state.loading ? <div>loading</div> : console.log(this.state.Data)}
      </div>
    );
  }
}
