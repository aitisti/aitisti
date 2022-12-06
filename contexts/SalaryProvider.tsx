import SalaryContext, {
  BillingPeriod,
  Currency,
  CurrencySymbol,
  defaultSalaryState,
  PaymentMethod,
  SalaryAction,
  SalaryActionType,
  SalaryState,
} from './SalaryContext';
import React from 'react';

const salaryReducer = (
  currentState: SalaryState,
  action: SalaryAction
): SalaryState => {
  const { type, payload } = action;
  switch (type) {
    case SalaryActionType.CHANGE_PAYMENT_METHOD: {
      const { paymentMethod } = payload as { paymentMethod: PaymentMethod };
      return {
        ...currentState,
        paymentMethod,
      };
    }
    case SalaryActionType.CHANGE_TAX_EXEMPTION: {
      return {
        ...currentState,
        taxExempt: !currentState.taxExempt,
      };
    }
    case SalaryActionType.CHANGE_MONTHLY_SALARY: {
      const { monthlySalary } = payload as { monthlySalary: number };
      return {
        ...currentState,
        monthlySalary,
      };
    }
    case SalaryActionType.CHANGE_OFFDAYS: {
      const { offDays } = payload as { offDays: number };
      return {
        ...currentState,
        offDays,
      };
    }
    case SalaryActionType.CHANGE_HOURLY_RATE: {
      const { hourlyRate } = payload as { hourlyRate: number };
      return {
        ...currentState,
        hourlyRate,
      };
    }
    case SalaryActionType.CHANGE_BILLING_PERIOD: {
      const { billingPeriod } = payload as { billingPeriod: BillingPeriod };
      return {
        ...currentState,
        billingPeriod,
      };
    }
    case SalaryActionType.CHANGE_CURRENCY: {
      const { currency } = payload as { currency: Currency };
      return {
        ...currentState,
        currency,
      };
    }
    case SalaryActionType.CHANGE_PFA_ACCOUNTING_FEES: {
      const { fees } = payload as { fees: number };
      return {
        ...currentState,
        yearlyPfaAccountingFees: fees,
      };
    }
    case SalaryActionType.CHANGE_SRL_ACCOUNTING_FEES: {
      const { fees } = payload as { fees: number };
      return {
        ...currentState,
        yearlySrlAccountingFees: fees,
      };
    }
    default:
      return {
        ...currentState,
      };
  }
};

type Props = {
  currencyRates: Currency[];
  children: React.ReactNode | React.ReactNode[];
};

const SalaryProvider = ({ currencyRates, children }: Props) => {
  const [currentSalaryState, dispatch] = React.useReducer(
    salaryReducer,
    defaultSalaryState
  );

  const changeTaxExemption = () => {
    dispatch({
      type: SalaryActionType.CHANGE_TAX_EXEMPTION,
    });
  };

  const changeMonthlySalary = (monthlySalary: number) => {
    dispatch({
      type: SalaryActionType.CHANGE_MONTHLY_SALARY,
      payload: { monthlySalary },
    });
  };

  const changePaymentMethod = (paymentMethod: PaymentMethod) => {
    dispatch({
      type: SalaryActionType.CHANGE_PAYMENT_METHOD,
      payload: { paymentMethod },
    });
  };

  const changeHourlyRate = (hourlyRate: number) => {
    dispatch({
      type: SalaryActionType.CHANGE_HOURLY_RATE,
      payload: { hourlyRate },
    });
  };

  const changeOffDays = (offDays: number) => {
    dispatch({
      type: SalaryActionType.CHANGE_OFFDAYS,
      payload: { offDays },
    });
  };

  const changeBillingPeriod = (billingPeriod: BillingPeriod) => {
    dispatch({
      type: SalaryActionType.CHANGE_BILLING_PERIOD,
      payload: { billingPeriod },
    });
  };

  const changeYearlyPfaAccountingFees = (fees: number) => {
    dispatch({
      type: SalaryActionType.CHANGE_PFA_ACCOUNTING_FEES,
      payload: { fees },
    });
  };

  const changeYearlySrlAccountingFees = (fees: number) => {
    dispatch({
      type: SalaryActionType.CHANGE_SRL_ACCOUNTING_FEES,
      payload: { fees },
    });
  };

  const changeCurrency = React.useCallback(
    (symbol: CurrencySymbol) => {
      let rate = 1; // fallback for RON
      for (let fx of currencyRates) {
        if (fx.symbol === symbol) {
          rate = fx.rate;
          break;
        }
      }

      dispatch({
        type: SalaryActionType.CHANGE_CURRENCY,
        payload: {
          currency: {
            symbol,
            rate,
          },
        },
      });
    },
    [currencyRates]
  );

  return (
    <SalaryContext.Provider
      value={{
        state: currentSalaryState,
        currencyRates,
        changeTaxExemption,
        changeMonthlySalary,
        changePaymentMethod,
        changeHourlyRate,
        changeOffDays,
        changeBillingPeriod,
        changeCurrency,
        changeYearlyPfaAccountingFees,
        changeYearlySrlAccountingFees,
      }}
    >
      {children}
    </SalaryContext.Provider>
  );
};

export default SalaryProvider;
