/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Transactions from '../Lists/Transactions';
import {
	currentChannelType,
	getTransactionType,
	getTransactionInfoType,
	getTransactionListType,
	transactionType,
	transactionListType
} from '../../consts/types';

export const TransactionsView = ({
	currentChannel,
	getTransaction,
	getTransactionInfo,
	getTransactionList,
	transaction,
	transactionList,
	getTransactionListSearch,
	transactionByOrg,
	transactionListSearch
}) => (
	<View>
		<Transactions
			currentChannel={currentChannel}
			transactionList={transactionList}
			getTransactionList={getTransactionList}
			transaction={transaction}
			transactionByOrg={transactionByOrg}
			getTransactionInfo={getTransactionInfo}
			getTransaction={getTransaction}
			getTransactionListSearch={getTransactionListSearch}
			transactionListSearch={transactionListSearch}
		/>
	</View>
);

TransactionsView.propTypes = {
	currentChannel: currentChannelType.isRequired,
	getTransaction: getTransactionType.isRequired,
	getTransactionInfo: getTransactionInfoType.isRequired,
	getTransactionList: getTransactionListType.isRequired,
	transaction: transactionType,
	transactionList: transactionListType.isRequired
};

export default TransactionsView;
