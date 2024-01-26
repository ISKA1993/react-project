import {
    fireEvent, render, screen,
} from '@testing-library/react';
import React from 'react';
import { Sidebar } from '../../../../../src/widgets/Sidebar/index';
import RenderWithTranslation
    from '../../../../shared/lib/classNames/test/RenderWithTranslation/RenderWithTranslation';

describe('Sidebar', () => {
    test('с первым параметром', () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('переключение', () => {
        RenderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
