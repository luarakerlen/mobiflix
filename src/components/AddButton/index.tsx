import { AddButtonContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export function AddButton() {
	return (
		<AddButtonContainer>
			<AntDesign name='plus' size={48} color={theme.colors.white} />
		</AddButtonContainer>
	);
}
