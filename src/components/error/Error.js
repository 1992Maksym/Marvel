import './Error.css';
import { ROOT_INDEX } from '../../constants/root';

class Error {
    render() {
        const html = `
            <div class="error__wrap">
                <div class="error-status">404</div>
                <div class="error-text">Not Found</div>
            </div>
        `

        ROOT_INDEX.innerHTML = html;
    }
}
export default new Error();