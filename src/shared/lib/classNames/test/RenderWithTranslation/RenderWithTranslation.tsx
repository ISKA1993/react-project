import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nextTest from '../../../../congif/i18next/i18nextTest';

function RenderWithTranslation(Component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nextTest}>
            {Component}
        </I18nextProvider>,
    );
}

export default RenderWithTranslation;
