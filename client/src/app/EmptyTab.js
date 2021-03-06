/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { PureComponent, Fragment } from 'react';

import Slot from './slot-fill/Slot';

import css from './EmptyTab.less';

import {
  Tab
} from './primitives';

import Flags, { DISABLE_CMMN, DISABLE_DMN } from '../util/Flags';


export default class EmptyTab extends PureComponent {

  componentDidMount() {
    this.props.onShown();
  }

  triggerAction() {}

  render() {

    const {
      onAction
    } = this.props;

    return (
      <Tab className={ css.EmptyTab }>
        <p className="create-buttons">
          <span>Create a </span>
          <button className="create-bpmn" onClick={ () => onAction('create-bpmn-diagram') }>BPMN diagram</button>
          {
            !Flags.get(DISABLE_DMN) && (
              <Fragment>
                <span> or </span>
                <button onClick={ () => onAction('create-dmn-diagram') }>DMN diagram</button>
              </Fragment>
            )
          }
          {
            !Flags.get(DISABLE_CMMN) && (
              <Fragment>
                <span> or </span>
                <button onClick={ () => onAction('create-cmmn-diagram') }>CMMN diagram</button>
              </Fragment>
            )
          }
        </p>

        <Slot name="empty-tab-buttons" />
      </Tab>
    );
  }
}